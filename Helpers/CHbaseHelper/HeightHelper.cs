using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CHBase.SDK;
using CHBase.SDK.ItemTypes;
using CHBase.SDK.Web;
using DataFormManager.Models.CHbaseModels;

namespace Helpers.CHbaseHelper
{
    public class HeightHelper
    {

        public static List<HeightModel> GetValues<T>(Guid typeID, PersonInfo personInfo) where T : HeightModel
        {
            HealthRecordSearcher searcher = personInfo.SelectedRecord.CreateSearcher();

            HealthRecordFilter filter = new HealthRecordFilter(typeID);
            searcher.Filters.Add(filter);

            HealthRecordItemCollection items = searcher.GetMatchingItems()[0];

            List<HeightModel> typedList = new List<HeightModel>();

            foreach (HealthRecordItem item in items)
            {
                Height itemObj = (Height)item;
                HeightModel heightObj = new HeightModel(itemObj.Value.Meters,itemObj.When);
                typedList.Add(heightObj);
            }

            return typedList;
        }

        public static  void AddRandomHeightEntry(PersonInfo personInfo)
        {
            Random random = new Random();

            double meters = random.NextDouble() * 0.5 + 1.5;

            Length value = new Length(meters);
            Height height = new Height(new HealthServiceDateTime(DateTime.Now), value);

            personInfo.SelectedRecord.NewItem(height);

        }
    }
}
