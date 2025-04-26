#!/usr/bin/env python3
"""
Module that defines the wait_n coroutine to spawn multiple wait_random coroutines
and return their delays in ascending order.
"""

import asyncio
from typing import List
from 0_basic_async_syntax import wait_random



async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawns n wait_random coroutines and returns their delays in ascending order."""
    delays = [wait_random(max_delay) for _ in range(n)]
    results = []
    
    # Await all coroutines concurrently and add their results to results list
    for delay in asyncio.as_completed(delays):
        result = await delay
        results.append(result)

    return results
