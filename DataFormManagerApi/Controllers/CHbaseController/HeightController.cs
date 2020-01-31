using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CHBase.SDK;
using CHBase.SDK.ItemTypes;
using CHBase.SDK.Web;
using Helpers.CHbaseHelper;
using DataFormManager.Models.CHbaseModels;
using Newtonsoft.Json;

namespace DataFormManagerApi.Controllers.CHbaseController
{
    [RoutePrefix("api/chbase/height")]
    public class HeightController : ApiController
    {
        [HttpGet, Route("all")]
        public HttpResponseMessage GetUserHeights()
        {

            string wctoken = ((string[])(Request.Headers.GetValues("CHbaseToken")))[0];

            Guid app_id = new Guid("d13d9244-8f0c-44e7-8498-682dc9befc23");

            PersonInfo personInfo = WebApplicationUtilities.GetPersonInfo(wctoken, app_id);

            List<HeightModel> heightMeasurements = HeightHelper.GetValues<HeightModel>(Height.TypeId, personInfo);

            var message = Request.CreateResponse(HttpStatusCode.OK, heightMeasurements);

            return message;
          
        }

        [HttpPost, Route("AddHeight")]
        public HttpResponseMessage AddUserHeight([FromBody]HeightModel heightObj)
        {

            Guid app_id = new Guid("d13d9244-8f0c-44e7-8498-682dc9befc23");

            string wctoken = ((string[])(Request.Headers.GetValues("CHbaseToken")))[0];

            PersonInfo personInfo = WebApplicationUtilities.GetPersonInfo(wctoken, app_id);

            HeightHelper.AddRandomHeightEntry(personInfo);

            var message = Request.CreateResponse(HttpStatusCode.OK);

            return message;

        }


    }
}
