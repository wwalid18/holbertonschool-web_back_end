#!/usr/bin/env python3
"""Module for measure_runtime coroutine."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure total runtime to execute
    async_comprehension four times in parallel."""
    start = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )
    end = time.perf_counter()
    return end - start
