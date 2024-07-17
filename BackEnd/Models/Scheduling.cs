using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;

namespace BackEnd.Models;

public class Scheduling
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "O paciente é obrigatório")]
    [JsonPropertyName("client")]
    public string Client { get; set; }

    [Required(ErrorMessage = "O profissional é obrigatório")]
    [JsonPropertyName("supplier")]
    public string Supplier { get; set; }

    [Required(ErrorMessage = "A data é obrigatória")]
    [JsonPropertyName("date")]    
    public DateTime Date { get; set; }
}