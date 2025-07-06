---
question: Why do verification within a general purpose proof assistant?
date: 2025-06-01
---

Program verification is the task of connecting two worlds, your program and its specification. Many verification systems heavily optimize for the first at the expense of the second. For example, static analysis tools are excellent at proving the absence of certain kinds of undefined behavior, but are incapable of proving that a particular piece of code actually sorts a list or maintains a data structure invariant because these tools can not express the concepts of the sortedness of a list or the balancedness of a binary tree.

Working in [Rocq](https://rocq-prover.org/) allows us to build on:

* A [mathematically rigorous logic](https://rocq-prover.org/why) for reasoning and a recognized implementation.
* A collection of high-quality libraries for domains ranging from abstract mathematics to cryptography and hardware.
* A rich ecosystem of tactics and meta-programming functionality to combine coarse-grained automated reasoning with fine-grained insights.
* A [powerful foundation for concurrent separation logic](https://iris-project.org/).

These features enable us to provide a rich program verification environment within a rich environment for formalizing the specification. The combination of these features enables [proving sophisticated properties over whole systems](/content/tech_reports/modular-full-system-verification.md).

