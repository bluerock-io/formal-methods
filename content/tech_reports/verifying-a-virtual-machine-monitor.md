---
title: Verifying a Virtual Machine Monitor
links:
  download: /tech_reports/verifying-a-virtual-machine-monitor.pdf
thumbnail: /tech_reports/verifying-a-virtual-machine-monitor.png
short: >
    Proving correctness of BlueRock's VMM modularly with separation logic.
date: 2024-10-07
authors:
- Paolo G. Giarrusso
- Hoang-Hai Dang
- František Farka
- Gregory Malecha
---

We present our approach to specifying and verifying the correctness of the BlueRock VMM.
This VMM is written in C++ and runs on top of NOVA.
We show how the VMM architecture naturally aligns with the specification of
a machine as _distributed systems_, and how we can capture this alignment
naturally within separation logic.
Within this architecture, we focus on the modular verification of CPU cores
which are implemented using a combination of _hardware virtualization_ and _software emulation_.
