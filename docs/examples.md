# Examples

## Basics

### Hello, World!

```python
from pyswip import Prolog
p = Prolog()
p.assertz("foo(bar, zoo)")
```

Prolog:
```prolog
foo(bar, zoo).
parent(X, Y) :-
    child(Y, X).
```