---
question: Why not *just* use Rust?
---

Rust is a really great language with powerful reasoning principles, strong guarantees, and great performance. Beyond this, there are some great tools for reasoning about Rust programs, so why not *just* use Rust? Rust is a great solution to writing better software, but it isn't the full solution to provably correct software. Rust's type system is focused on eliminating undefined behavior (UB), especially UB that comes from concurrent programming idioms that are very difficult to get right. Rust's borrow checker allows it to statically ensure the absence of data races, but, alone, it is not sufficient to prove functional correctness. Take `Cell<T>` for example, the library guarantees the absence of data races by enforcing that accesses are synchronized (a property which itself must be established in unsafe Rust), but Rust alone provides no facilities for reasoning about the actual value in the cell.
