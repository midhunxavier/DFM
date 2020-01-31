﻿using DataFormManager.Models;
using Helpers;
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
    [RoutePrefix("api/userforms")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [CustomExceptionFilter]
    public class UserFormsController : ApiController
    {

        [HttpPost]
        public HttpResponseMessage AddUserFormsDataApi(List<UserFormObjectModel> userFormsData )
        {
            try
            {
                UserFormsHelper.AddUserFormsData(userFormsData);
                var message = Request.CreateResponse(HttpStatusCode.OK,"User is Assigned");
                return message;
            }
            catch
            {
                throw new Exception("Error Occurred");
            }
            
            
        }
   
    }
    
}
