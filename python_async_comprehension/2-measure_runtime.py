#!/usr/bin/env python3
"""Module for measure_runtime coroutine."""

import asyncio
import time
from typing import Callable
import importlib.util
import sys

spec = importlib.util.spec_from_file_location(
    "async_comprehension", "./1-async_comprehension.py"
)
async_comprehension_module = importlib.util.module_from_spec(spec)
sys.modules["async_comprehension"] = async_comprehension_module
spec.loader.exec_module(async_comprehension_module)

async_comprehension = async_comprehension_module.async_comprehension


async def measure_runtime() -> float:
    """Measure total runtime to execute async_
    comprehension four times in parallel."""
    start_time = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )
    end_time = time.perf_counter()
    return end_time - start_time
