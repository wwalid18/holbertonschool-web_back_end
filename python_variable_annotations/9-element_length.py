#!/usr/bin/env python3
"""
Module that defines a function element_length which returns
a list of tuples containing elements and their lengths.
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with elements and their lengths."""
    return [(i, len(i)) for i in lst]
