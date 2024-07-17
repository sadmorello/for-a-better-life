using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("[controller]")]
public class SchedulingController : ControllerBase
{
    private static List<Scheduling> scheduelings = new List<Scheduling>();

    [HttpPost]
    public void CreateScheduling([FromBody] Scheduling scheduling)
    {
        scheduelings.Add(scheduling);
    }

    [HttpGet]
    public IEnumerable<Scheduling> GetScheduling()
    {
        return scheduelings;
    }

    [HttpGet("{id}")]
    public Scheduling? GetSchedulingById(int id)
    {
        return scheduelings.FirstOrDefault(scheduling => scheduling.Id == id);
    }

}