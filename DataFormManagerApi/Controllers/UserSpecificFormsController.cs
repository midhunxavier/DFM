using CHBase.SDK;
using CHBase.SDK.ItemTypes;
using CHBase.SDK.Web;
using DataFormManager.Models;
using DataFormManager.Models.CHbaseModels;
using Helpers;
using Helpers.CHbaseHelper;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DataFormManagerApi.Controllers
{
    [BasicAuthentication]
    [RoutePrefix("api/userspecificforms")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [CustomExceptionFilter]
    public class GetUserFormListController : ApiController
    {
        [HttpGet, Route("{formName}")]
        public HttpResponseMessage GetUserFormDatasApi(string formName)
        {
            string accessToken = Request.Headers.Authorization.Parameter;
            FormTypeModel formFields = FormTypeHelper.GetFormFields(formName);

            if (formFields.FormType.ToLower() == "height")
            {
                string wctoken = ((string[])(Request.Headers.GetValues("CHbaseToken")))[0];

                Guid app_id = new Guid("d13d9244-8f0c-44e7-8498-682dc9befc23");

                PersonInfo personInfo = WebApplicationUtilities.GetPersonInfo(wctoken, app_id);

                List<HeightModel> heightMeasurements = HeightHelper.GetValues<HeightModel>(Height.TypeId, personInfo);

                List<FormDataModel> formDatas = new List<FormDataModel>();

                

                int i = 1000;

                foreach (HeightModel heightMeasurement in heightMeasurements){


                    FormDataModel formdata = new FormDataModel();
                    List<DataValueModel> datas = new List<DataValueModel>();
                    DataValueModel data1 = new DataValueModel();
                    DataValueModel data2 = new DataValueModel();
                    data1.Name = "Meters";
                    data1.Value = heightMeasurement.Meters.ToString();
                    datas.Add(data1);
                    data2.Name = "When";
                    data2.Value = heightMeasurement.When.ToString();
                    datas.Add(data2);
                    formdata.FormId = i;
                    formdata.FormName = formFields.FormName;
                    formdata.FormType = formFields.FormType;
                    formdata.FormData = datas;
                    
                    formDatas.Add(formdata);
                    i += 1;
                }

                var message = Request.CreateResponse(HttpStatusCode.OK, formDatas);

                return message;
            }

            else
            {
                UserObjectModel userObj = TokenHelper.getUserByAccessToken(accessToken);
                if (userObj != null)
                {
                    List<FormDataModel> dataList = UserSpecificFormsHelper.GetUserFormDataList(userObj.UserId, formName);
                    var message = Request.CreateResponse(HttpStatusCode.OK, dataList);
                    return message;
                }
                else
                {
                    throw new Exception("Invalid User");
                }
            }
            
        }

        [HttpGet, Route("{formName}/{start}/{count}")]
        public HttpResponseMessage GetLimitedUserFormDatasApi(string formName,string start, string count)
        {
            string accessToken = Request.Headers.Authorization.Parameter;
            UserObjectModel userObj = TokenHelper.getUserByAccessToken(accessToken);
            if (userObj != null)
            {
                List<FormDataModel> dataList = UserSpecificFormsHelper.GetLimitedUserFormDataList(userObj.UserId, formName,start,count);
                var message = Request.CreateResponse(HttpStatusCode.OK, dataList);
                return message;
            }
            else
            {
                throw new Exception("Invalid User");
            }
        }
    }
}
