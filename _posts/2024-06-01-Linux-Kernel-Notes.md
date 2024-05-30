---
layout: post
title:  "My Notes on Linux Kernel"
categories: jekyll update
tags: Linux-Kernel Notes

---
Hello There 
![Role of kernel](/public/media/role-of-kernel.png)

▶ Manage all the hardware resources: CPU, memory, I/O.
▶ Provide a set of portable, architecture and hardware independent APIs to
allow user space applications and libraries to use the hardware resources.
▶ Handle concurrent accesses and usage of hardware resources from different
applications.
    • Example: a single network interface is used by multiple user space applications
    through various network connections. The kernel is responsible for “multiplexing”
    the hardware resource.

## System Call 
▶ The main interface between the kernel and user space is
the set of system calls
▶ About 400 system calls that provide the main kernel
services
• File and device operations, networking operations,
inter-process communication, process management,
memory mapping, timers, threads, synchronization
primitives, etc.
▶ This system call interface is wrapped by the C library,
and user space applications usually never make a system
call directly but rather use the corresponding C library
function