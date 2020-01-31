using CHBase.SDK;
using CHBase.SDK.ItemTypes;
using CHBase.SDK.Web;
using System;

namespace DataFormManager.Models.CHbaseModels
{
    public class HeightModel
    {
        public double Meters { get; set; }
        public DateTime When { get; set; }

        
        public HeightModel(double val, HealthServiceDateTime time) 
        {
            Meters = val;
            When = time.ToDateTime();
        }
    }
}
