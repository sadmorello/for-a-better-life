using BackEnd.Data;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class ScheduleController : ControllerBase
{
    private SchedulingContext _context;

    public ScheduleController(SchedulingContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult CreateSchedule([FromBody] Schedule scheduling)
    {
        _context.Schedules.Add(scheduling);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetScheduleById), new { id = scheduling.Id }, scheduling);
    }

    [HttpGet]
    public IEnumerable<Schedule> GetSchedule([FromBody] int skip = 0, [FromBody] int take = 5)
    {
        return _context.Schedules.Skip(skip).Take(take);
    }

    [HttpGet("{id}")]
    public IActionResult GetScheduleById(int id)
    {
        Schedule? scheduling = _context.Schedules.FirstOrDefault(scheduling => scheduling.Id == id);

        if (scheduling == null) return NotFound();

        return Ok(scheduling);
    }

}