using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class ScheduleController : ControllerBase
{
    private static List<Schedule> schedueles = new List<Schedule>();

    [HttpPost]
    public IActionResult CreateSchedule([FromBody] Schedule scheduling)
    {
        schedueles.Add(scheduling);

        return CreatedAtAction(nameof(GetScheduleById), new { id = scheduling.Id }, scheduling);
    }

    [HttpGet]
    public IEnumerable<Schedule> GetSchedule()
    {
        return schedueles;
    }

    [HttpGet("{id}")]
    public IActionResult GetScheduleById(int id)
    {
        Schedule? scheduling = schedueles.FirstOrDefault(scheduling => scheduling.Id == id);

        if (scheduling == null) return NotFound();
        
        return Ok(scheduling);
    }

}