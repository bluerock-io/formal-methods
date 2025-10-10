---
title: Towards Modular Specification and Verification of Concurrent Hypervisor-based Isolation
where: Workshop on Principles of Secure Compilation (PriSC) 2024, London, UK
thumbnail: /tech_reports/towards-modular-specification-and-verification-of-concurrent-hypervisor-based-isolation.png
links:
  download: /tech_reports/towards-modular-specification-and-verification-of-concurrent-hypervisor-based-isolation.pdf
  conference: https://popl24.sigplan.org/home/prisc-2024#About
  slides: /talks/prisc24-towards-modular-specification-and-verification-of-concurrent-hypervisor-based-isolation.pdf
short: >
   An overview of our work on verifying the NOVA microkernel circa 2024.
date: 2024-01-20
authors:
- Hoang-Hai Dang
- David Swasey
- Gregory Malecha
---

NOVA is a microhypervisor that executes in a privileged kernel mode and that provides only basic services for virtualization, isolation, scheduling and management of physical system resources. NOVA’s design goal is to reduce the critical code base, and to leave richer virtualization features to user applications, such as a Virtual Machine Monitor (VMM), that run in a less privileged mode (e.g. user mode). The size (about 17K lines of code and 15 hypercalls) makes it a suitable target for formal verification.

In the talk, we present our on-going effort in formally verifying the concurrent NOVA microhypervisor in a modular, tractable approach. We show how to decompose the specifications and proofs of NOVA’s hypercalls using concurrent separation logic, and discuss the (open) challenges.
