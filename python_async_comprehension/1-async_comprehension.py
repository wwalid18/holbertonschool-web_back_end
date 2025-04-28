#!/usr/bin/env python3
"""Module for async_comprehension coroutine."""

import asyncio
from typing import List
import importlib.util
import sys

spec = importlib.util.spec_from_file_location(
    "async_generator", "./0-async_generator.py"
)
async_generator_module = importlib.util.module_from_spec(spec)
sys.modules["async_generator"] = async_generator_module
spec.loader.exec_module(async_generator_module)
async_generator = async_generator_module.async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers using async
    comprehension over async_generator."""
    return [i async for i in async_generator()]
