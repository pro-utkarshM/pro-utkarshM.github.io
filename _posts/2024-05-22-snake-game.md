---
layout: post
title:  "Snake game in Assembly"
categories: jekyll update
tags: software-dev projects

---
### Creating a Bootable Snake Game in Assembly Language


Hello there! I am Utkarsh, born somewhere in the early 2000's. Then again, any speculations are right. Growing up, I played this snake game on my grandpa's phone all day, placing bets against my cousins, seeing whose got a high score at the end of the day. This and Brick-Breaker game are very close to me, well these are the only games I love making in anyway possible, having made this game in my pre-high school era in java gave me enough confidence to make it in assembly.

I am an Sophomore studying Electronics and Communication Engineering, and I have completed my semester examinations (fourth semester ;) ) and summer holidays began right after exams got ended, but here I am living in hostel room, now you might ask why am I telling you this? because I am bored asf and I have nothing to do (thats a lie) but to make blogs on my favourite projects. So here is how to...

> Create a bootable Snake Game in Assembly Language

Now this project involves writing a custom bootloader, a second stage loader, and a kernel that runs a simple Snake game. In this blog, we will break down the [code](https://github.com/pro-utkarshM/Snake_game) and explain each part to give you a clear understanding of how it all works.

### Overview

Our project consists of three main parts:
1. **First Stage Bootloader (`boot1.asm`)**
2. **Second Stage Bootloader (`boot2.asm`)**
3. **Kernel (`kernel.asm`)**

We will also use a Makefile to automate the process of assembling the code and creating a bootable disk image.

### First Stage Bootloader (`boot1.asm`)

The first stage bootloader is responsible for loading the second stage bootloader into memory and transferring control to it. This code is simple because it needs to fit within the first 512 bytes of the disk.

```assembly
org 0x7c00

; Code starts here
jmp 0x500:0x0000

times 510-($-$$) db 0
dw 0xaa55
```

- `org 0x7c00`: Tells the assembler to assume the code is loaded at memory address 0x7C00.
- `jmp 0x500:0x0000`: Jumps to the second stage bootloader located at segment 0x500.
- The last two lines pad the code to 510 bytes and add the boot signature (0xAA55).

### Second Stage Bootloader (`boot2.asm`)

The second stage bootloader loads the kernel into memory and starts it.

```assembly
org 0x500
jmp 0x0000:start

runningKernel db 'Running Kernel...', 0

print_string:
    lodsb
    cmp al, 0
    je end

    mov ah, 0eh
    mov bl, 15
    int 10h

    mov dx, 0
.delay_print:
    inc dx
    mov cx, 0
.time:
    inc cx
    cmp cx, 10000
    jne .time

    cmp dx, 1000
    jne .delay_print

    jmp print_string

end:
    mov ah, 0eh
    mov al, 0xd
    int 10h
    mov al, 0xa
    int 10h
    ret

start:
    xor ax, ax
    mov ds, ax
    mov es, ax

    ; Print the message
    mov si, runningKernel
    call print_string

    reset:
        mov ah, 00h
        mov dl, 0
        int 13h
        jc reset

        jmp load_kernel

    load_kernel:
        mov ax, 0x7E0
        mov es, ax
        xor bx, bx

        mov ah, 0x02
        mov al, 20
        mov ch, 0
        mov cl, 3
        mov dh, 0
        mov dl, 0
        int 13h
        jc load_kernel

        jmp 0x7e00

times 510-($-$$) db 0
dw 0xaa55
```

- `org 0x500`: Sets the origin for the code to 0x500.
- The `print_string` procedure prints the message "Running Kernel..." with a delay.
- The `start` label initializes the data and extra segments, prints the message, and then resets and loads the kernel from the disk.
- The `load_kernel` label reads 20 sectors starting from sector 3 (where the kernel is located) and jumps to the kernel's starting address (0x7e00).

### Kernel (`kernel.asm`)

The kernel contains the main game logic for the Snake game.

```assembly
org 0x7e00
jmp 0x0000:start

section .start
    call hide_cursor

start:
    call start_game_loop
    call show_game_over
    jmp start

sleep:
    mov ah, 0
    int 1ah
    mov bx, dx

.wait:
    mov ah, 0
    int 1ah
    sub dx, bx
    cmp dx, si
    jl .wait
    ret

hide_cursor:
    mov ah, 02h
    mov bh, 0
    mov dh, 25
    mov dl, 0
    int 10h
    ret

clear_keyboard_buffer:
    mov ah, 1
    int 16h
    jz .end
    mov ah, 0h
    int 16h
    jmp clear_keyboard_buffer

.end:
    ret

exit_program:
    mov ah, 4ch
    int 21h
    ret

buffer_clear:
    mov bx, 0

.next:
    mov byte [buffer + bx], ' '
    inc bx
    cmp bx, 2000
    jnz .next
    ret

buffer_write:
    mov di, buffer
    mov al, 80
    mul dl
    add ax, cx
    add di, ax
    mov byte [di], bl
    ret

buffer_read:
    mov di, buffer
    mov al, 80
    mul dl
    add ax, cx
    add di, ax
    mov bl, [di]
    ret

buffer_print_string:
.next:
    mov al, [si]
    cmp al, 0
    jz .end
    mov byte [buffer + di], al
    inc di
    inc si
    jmp .next

.end:
    ret

buffer_render:
    mov ax, 0b800h
    mov es, ax
    mov di, buffer
    mov si, 0

.next:
    mov bl, [di]
    cmp bl, 8
    jz .is_snake
    cmp bl, 4
    jz .is_snake
    cmp bl, 2
    jz .is_snake
    cmp bl, 1
    jz .is_snake
    jmp .write

.is_snake:
    mov bl, 260

.write:
    mov byte [es:si], bl
    inc di
    add si, 2
    cmp si, 4000
    jnz .next
    ret

print_score:
    mov si, .score_message
    mov di, 0
    call buffer_print_string
    mov ax, [score]
    mov di, 13

.next_digit:
    xor dx, dx
    mov bx, 10
    div bx
    push ax
    mov al, dl
    add al, 48
    mov byte [buffer + di], al
    pop ax
    dec di
    cmp ax, 0
    jnz .next_digit
    ret

.score_message:
    db " Points: 00000", 0

update_snake_direction:
    mov ah, 1
    int 16h
    jz .end
    mov ah, 0h
    int 16h
    cmp al, 27
    jz exit_program
    cmp ah, 48h
    jz .up
    cmp ah, 50h
    jz .down
    cmp ah, 4Bh
    jz .left
    cmp ah, 4Dh
    jz .right
    jmp update_snake_direction

.up:
    mov byte [snake_direction], 8
    jmp update_snake_direction

.down:
    mov byte [snake_direction], 4
    jmp update_snake_direction

.left:
    mov byte [snake_direction], 2
    jmp update_snake_direction

.right:
    mov byte [snake_direction], 1
    jmp update_snake_direction

.end:
    ret

update_snake_head:
    mov al, [snake_head_y]
    mov byte [snake_head_previous_y], al
    mov al, [snake_head_x]
    mov byte [snake_head_previous_x], al
    mov ah, [snake_direction]
    cmp ah, 8
    jz .up
    cmp ah, 4
    jz .down
    cmp ah, 2
    jz .left
    cmp ah, 1
    jz .right

.up:
    dec word [snake_head_y]
    jmp .end

.down:
    inc word [snake_head_y]
    jmp .end

.left:
    dec word [snake_head_x]
    jmp .end

.right:
    inc word [snake_head_x]

.end:
    mov bl, [snake_direction]
    mov ch, 0
    mov cl, [snake_head_previous_x]
    mov dl, [snake_head_previous_y]
    call buffer_write
    ret

check_snake_new_position:
    mov ch, 0
    mov cl, [snake_head_x]
    mov dh, 0
    mov dl, [snake_head_y]
    call buffer_read
    cmp bl, 8
    jle .set_game_over
    cmp bl, '@'
    je .food
    cmp bl, ' '
    je .empty_space

.write_new_head:
    mov bl, 1
    mov ch, 0
    mov cl, [snake_head_x]
    mov ch, 0
    mov dl, [snake_head_y]
    call

 buffer_write
    ret

.food:
    call update_snake_tail
    call .write_new_head
    call create_food
    jmp .end

.set_game_over:
    mov byte [is_game_over], al
    ret

.empty_space:
    call update_snake_tail
    call .write_new_head
    ret

.end:
    ret

update_snake_tail:
    mov al, [snake_tail_y]
    mov byte [snake_tail_previous_y], al
    mov al, [snake_tail_x]
    mov byte [snake_tail_previous_x], al
    mov ch, 0
    mov cl, [snake_tail_x]
    mov dh, 0
    mov dl, [snake_tail_y]
    call buffer_read
    cmp bl, 8
    jz .up
    cmp bl, 4
    jz .down
    cmp bl, 2
    jz .left
    cmp bl, 1
    jz .right
    jmp exit_program

.up:
    dec word [snake_tail_y]
    jmp .end

.down:
    inc word [snake_tail_y]
    jmp .end

.left:
    dec word [snake_tail_x]
    jmp .end

.right:
    inc word [snake_tail_x]

.end:
    mov bl, ' '
    mov ch, 0
    mov cl, [snake_tail_previous_x]
    mov dl, [snake_tail_previous_y]
    call buffer_write
    ret

create_initial_food:
    mov cx, 1
    push cx
    call create_food
    pop cx
    ret

create_food:
.try_again:
    mov ah, 0
    int 1ah
    mov ax, dx
    and ax, 0fffh
    mul dx
    mov dx, ax
    mov ax, dx
    mov cx, 2000
    xor dx, dx
    div cx
    mov bx, dx
    mov di, buffer
    mov al, [di + bx]
    cmp al, ' '
    jnz .try_again
    mov byte [di + bx], '@'
    ret

reset_game:
    mov ax, 0
    mov word [score], ax
    mov byte [is_game_over], al
    mov al, 8
    mov byte [snake_direction], al
    mov al, 40
    mov byte [snake_head_x], al
    mov byte [snake_head_previous_x], al
    mov byte [snake_tail_previous_x], al
    mov byte [snake_tail_x], al
    mov al, 15
    mov byte [snake_head_y], al
    mov byte [snake_head_previous_y], al
    mov byte [snake_tail_y], al
    mov byte [snake_tail_previous_y], al
    ret

start_game_loop:
    call reset_game
    call buffer_clear
    call draw_border
    call create_initial_food

.main_loop:
    mov si, 2
    call sleep
    call update_snake_direction
    call update_snake_head
    call check_snake_new_position
    call print_score
    call buffer_render
    mov al, [is_game_over]
    cmp al, 0
    jz .main_loop
    ret

draw_border:
    mov di, 0

.next_x:
    mov byte [buffer + di], 255
    mov byte [buffer + 80 + di], 196
    mov byte [buffer + 1920 + di], 196
    inc di
    cmp di, 80
    jnz .next_x

    mov di, 0

.next_y:
    mov byte [buffer + 80 + di], 179
    mov byte [buffer + 159 + di], 179
    add di, 80
    cmp di, 2000
    jnz .next_y

.corners:
    mov byte [buffer + 80], 218
    mov byte [buffer + 159], 191
    mov byte [buffer + 1920], 192
    mov byte [buffer + 1999], 217
    ret

show_game_over:
    mov si, .game_over_1
    mov di, 880 + 32
    call buffer_print_string
    mov si, .game_over_2
    mov di, 960 + 32
    call buffer_print_string
    mov si, .game_over_1
    mov di, 1040 + 32
    call buffer_print_string
    call buffer_render
    call clear_keyboard_buffer
    mov ah, 0
    int 16h
    ret

.game_over_1:
    db "               ", 0
.game_over_2:
    db "Game Over!", 0

section .bss
    score resw 1
    is_game_over resb 1
    snake_direction resb 1
    snake_head_x resb 1
    snake_head_y resb 1
    snake_head_previous_x resb 1
    snake_head_previous_y resb 1
    snake_tail_x resb 1
    snake_tail_y resb 1
    snake_tail_previous_x resb 1
    snake_tail_previous_y resb 1
    buffer resb 2000
```

- The kernel starts at memory address 0x7e00 and handles the main game logic, including updating the snake's position, checking for collisions, and rendering the game to the screen.
- `start_game_loop`: Initializes the game, draws the border, creates the initial food, and enters the main game loop.
- `buffer_clear`, `buffer_write`, and `buffer_render`: Handle the video buffer for rendering the game.
- `update_snake_head` and `update_snake_tail`: Manage the snake's movement.
- `check_snake_new_position`: Checks the new position of the snake's head to handle game over conditions, eating food, or moving to an empty space.

### Makefile

The Makefile automates the process of assembling the code and creating a bootable disk image.

```makefile
# First Stage
boot1_file = boot1

# Second Stage
boot2_file = boot2
boot2_pos = 1
boot2_size = 1

# Kernel
kernel_file = kernel
kernel_pos = 2
kernel_size = 20

boot_disk = disk.img
block_size = 512
disk_size = 100

nasm_flags = -f bin
qemu_flags = -fda

all: create_disk boot1_only boot2_only kernel_only write_boot1 write_boot2 write_kernel launch_qemu clean

create_disk:
	@dd if=/dev/zero of=$(boot_disk) bs=$(block_size) count=$(disk_size) status=noxfer

boot1_only:
	@nasm $(nasm_flags) $(boot1_file).asm -o $(boot1_file).bin

boot2_only:
	@nasm $(nasm_flags) $(boot2_file).asm -o $(boot2_file).bin

kernel_only:
	@nasm $(nasm_flags) $(kernel_file).asm -o $(kernel_file).bin

write_boot1:
	@dd if=$(boot1_file).bin of=$(boot_disk) bs=$(block_size) count=1 conv=notrunc status=noxfer

write_boot2:
	@dd if=$(boot2_file).bin of=$(boot_disk) bs=$(block_size) seek=$(boot2_pos) count=$(boot2_size) conv=notrunc status=noxfer

write_kernel:
	@dd if=$(kernel_file).bin of=$(boot_disk) bs=$(block_size) seek=$(kernel_pos) count=$(kernel_size) conv=notrunc

launch_qemu:
	clear
	@qemu-system-i386 $(qemu_flags) $(boot_disk)

clean:
	@rm -f *.bin $(boot_disk) *~
	clear
```

### Running the Game

1. **Compile the Bootloaders and Kernel**: Run `make all` to compile the bootloader and kernel, create the disk image, and write the binary files to the disk image.
2. **Launch QEMU**: The `launch_qemu` target in the Makefile starts the QEMU emulator with the disk image containing your bootable Snake game.
3. **Play the Game**: Once QEMU starts, you can play the Snake game using the arrow keys. The game will display the score and handle game over conditions.

> So this was the game :D, How was it, Happy coding!