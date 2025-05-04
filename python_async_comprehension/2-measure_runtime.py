#!/usr/bin/env python3
"""Measure the runtime of running async_comprehension"""

import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Execute async_comprehension 4 times"""
    start_time = time.perf_counter()

    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()

    return end_time - start_time