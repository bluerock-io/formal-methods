---
question: Why not *just* use Rust?
---

Rust is a modern language with powerful reasoning principles, strong guarantees, and great performance.
This makes Rust is a great solution to writing better software, but it isn't the full solution to writing *provably correct software*.
Rust's type system is focused on eliminating [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior) (UB), especially UB that comes from concurrent programming idioms that are very difficult to get right. Rust's borrow checker allows it to statically ensure the absence of data races, but, alone, it is not sufficient to prove functional correctness. Take `Cell<T>` for example, the library guarantees the absence of data races by enforcing that accesses are synchronized (a property which itself must be established in unsafe Rust), but Rust alone provides no facilities for reasoning about the actual value in the cell.

While Rust *alone* is not sufficient for verification, there are several tools (e.g. [Verus](https://github.com/verus-lang/verus) and [Kani](https://model-checking.github.io/kani/)) for verifying properties of Rust code beyond memory safety.
