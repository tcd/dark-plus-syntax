uint64_t clint_timer_get_freq(void)
{
    /* The clock is divided by CLINT_CLOCK_DIV */
    return sysctl_clock_get_freq(SYSCTL_CLOCK_CPU) / CLINT_CLOCK_DIV;
}
