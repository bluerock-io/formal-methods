---
title: Modularizing CPU semantics for Virtualization
where: PriSC'24
links:
  download: ./modularizing-cpu-semantics.pdf
  conference: https://popl24.sigplan.org/home/prisc-2024#About
  slides: ./modularizing-cpu-semantics-slides.pdf
short: >
   An overview of our work on hardware architectural semantics.
year: 2024
authors:
- Paolo G. Giarrusso
- Abhishek Anand
- Gregory Malecha
- František Farka
- Hoang-Hai Dang
---

Hardware-assisted virtualization simplifies *implementing* virtual machine monitors (VMM), but verifying a VMM using hardware virtualization requires a precise model of the virtualization. A natural specification for a VMM is that it refines the bare-metal hardware *specification*; however, a simple backwards simulation on the processor semantics would require case distinction on all instructions, showing that they refine the non-virtualized counterparts. This case analysis is prohibitively expensive for modern architectures. Further, correctness of hardware virtualization is mainly the responsibility of the ISA architects, not the VMM implementer. In this paper, we propose a modularization of hardware semantics that succinctly captures the difference between the "bare-metal" behavior and hardware-virtualized behavior of a processor. We illustrate how this helped us modularize the verification of our VMM.
