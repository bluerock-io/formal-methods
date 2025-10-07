---
title: Modular, Full-System Verification
where: HotOS'25
thumbnail: /tech_reports/modular-full-system-verification.png
links:
  download: /tech_reports/modular-full-system-verification.pdf
  publisher: https://dl.acm.org/doi/10.1145/3713082.3730387
  slides: /talks/hotos-2025-modular-fullstack.pdf
short: >
    Learn how BlueRock is verifying entire systems using the power of separation logic.
year: 2025
date: 2025-05-14
authors:
- Gregory Malecha
- Hoang-Hai Dang
- Paolo G. Giarrusso
- Simon Hudon
- Jan-Oliver Kaiser
- David Swasey
---

We present an approach to specifying operating systems that is both highly modular and supports deriving various properties necessary to modern operating systems. The approach combines a machine semantics decomposed by privilege levels with a separation logic specification of the operating system API. We describe how the specification style enables natural proofs of robust safety in addition to deep behavioral refinements of user-mode applications running atop the OS. This approach enables simple and flexible concurrent specifications and unlocks new opportunities for whole-system verification.
