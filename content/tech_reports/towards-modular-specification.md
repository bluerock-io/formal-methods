---
title: Towards Modular Specification and Verification of Concurrent Hypervisor-based Isolation
where: PriSC'24
links:
  download: MISSING
  conference: https://popl24.sigplan.org/home/prisc-2024#About
short: >
   An overview of our work on verifying the NOVA microkernel.
year: 2024
---

NOVA is a microhypervisor that executes in a privileged kernel mode and that provides only basic services for virtualization, isolation, scheduling and management of physical system resources. NOVA’s design goal is to reduce the critical code base, and to leave richer virtualization features to user applications, such as a Virtual Machine Monitor (VMM), that run in a less privileged mode (e.g. user mode). The size (about 17K lines of code and 15 hypercalls) makes it a suitable target for formal verification.

In the talk, we present our on-going effort in formally verifying the concurrent NOVA microhypervisor in a modular, tractable approach. We show how to decompose the specifications and proofs of NOVA’s hypercalls using concurrent separation logic, and discuss the (open) challenges.
