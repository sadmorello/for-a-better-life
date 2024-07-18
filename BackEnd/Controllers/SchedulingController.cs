using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class SchedulingController : ControllerBase
{
    private static List<Scheduling> scheduelings = new List<Scheduling>();

    [HttpPost]
    public IActionResult CreateScheduling([FromBody] Scheduling scheduling)
    {
        scheduelings.Add(scheduling);

        return CreatedAtAction(nameof(GetSchedulingById), new { id = scheduling.Id }, scheduling);
    }

    [HttpGet]
    public IEnumerable<Scheduling> GetScheduling()
    {
        return scheduelings;
    }

    [HttpGet("{id}")]
    public IActionResult GetSchedulingById(int id)
    {
        Scheduling? scheduling = scheduelings.FirstOrDefault(scheduling => scheduling.Id == id);

        if (scheduling == null) return NotFound();
        
        return Ok(scheduling);
    }

}