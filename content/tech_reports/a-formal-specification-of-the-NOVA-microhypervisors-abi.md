---
title: A Formal Specification of the NOVA Microhypervisor ABI
links:
  download: https://bedrocksystems.com/wp-content/uploads/2024/04/nova-interface.pdf
short: >
    BlueRock Security developed a separation logic specification of the NOVA microhypervisor ABI that enables simultaneous verification of NOVA as well as verification of user-mode libraries and applications running on top of NOVA.
year: 2024
authors:
- Hoang-Hai Dang
- David Swasey
- Paolo G. Giarrusso
- Gregory Malecha
---

We present a formal specification for the [NOVA microhypervisor](https://hypervisor.org) that handles concurrency and architectural behaviors.
Our specification combines an operational specification for unprivileged user code with a separation logic specification
of privileged state and operations. We find that the small footprint and open world nature of separation logic makes the
specification highly modular and reasonably high level. Furthermore, we describe several uses of the specification for verifying applications that use NOVA.