using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Data;

public class SchedulingContext : DbContext
{
    public SchedulingContext(DbContextOptions<SchedulingContext> opts) : base(opts)
    {

    }

    public DbSet<Schedule> Schedules { get; set; }
}