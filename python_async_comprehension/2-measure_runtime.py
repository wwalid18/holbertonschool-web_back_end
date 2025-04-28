#!/usr/bin/env python3
"""
Measure the runtime of four async_comprehension coroutines running in parallel
"""
import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times in
    parallel using asyncio.gather
    and measure the total runtime
    Returns:
        float: Total runtime in seconds
    """
    start_time = time.perf_counter()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.perf_counter()
    return end_time - start_time
