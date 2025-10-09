---
title: Protocol Completion of A Robust C++ Virtual Switch
links:
  download: /tech_reports/protocol-completion-of-a-robust-cpp-virtual-switch.pdf
thumbnail: /tech_reports/protocol-completion-of-a-robust-cpp-virtual-switch.png
short: >
    Proving robust safety of BlueRock's VIRTIO-based virtual Ethernet switch.
date: 2024-08-01
authors:
- Jasper Haag
- Yoichi Hirai
- Simon Hudon
- Awais Masood
- Gregory Malecha
- Gordon Stewart
---

This technical report presents __protocol completion__, a new solution to
_robust safety_ over shared-memory protocols such as _VIRTIO_.
Protocol completion provides a generic specification for an application that
implements a protocol with clients that might not always follow the protocol.
Unlike approaches to robust safety that duplicate proofs, protocol completion
lets one prove a system only once, deriving functional and safety guarantees
independently on top against both compliant and adversarial clients.
As evaluation, we apply protocol completion to verification of the dataplane of
a virtual Ethernet switch running on BlueRock's microkernel-based operating system.
