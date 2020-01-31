using System;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Linq;
using Helpers;
using System.Net.Http;
using System.Net;
using DataFormManager.Models;
using System.Net.Http.Headers;
using CHBase.SDK;
using CHBase.SDK.Web;
using CHBase.SDK.ItemTypes;



namespace dataFormManagerApi.Controllers
{
    [RoutePrefix("api/login")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {

        [HttpPost, System.Web.Http.Route("chbase")]
        public HttpResponseMessage ChbaseLogin([FromBody] WcToken token)
        {
            Guid app_id = new Guid("d13d9244-8f0c-44e7-8498-682dc9befc23");
            HttpContext context = HttpContext.Current;
            var resp = new HttpResponseMessage(HttpStatusCode.Moved);
            resp.Headers.Location = new Uri("http://dataformmanager.dev39.grcdev.com/dashboard" + "?wctoken=" + token.wctoken);
            return resp;
        }

        [HttpGet, System.Web.Http.Route("google")]
        public HttpResponseMessage GoogleLogin()
        {
            var uri = Request.RequestUri;
            var code = System.Web.HttpUtility.ParseQueryString(uri.Query)["code"];
            if (code!=null)
            {
                TokenObjectModel tokenObj = LoginHelper.GetGoogleAccesToken(code);
                HttpResponseMessage resp = LoginHelper.CreateCookie(tokenObj.AuthorizationCode);
                return (resp);
            }
            else
            {
                var message = Request.CreateResponse(HttpStatusCode.NotFound, "Code is inavlid");
                return message;
            }
             
        }
        [HttpGet, Route("getAuthCode")]
        public HttpResponseMessage GetAuthCode()
        {
            string url = LoginHelper.GetGoogleAuthCode();
            var response = Request.CreateResponse(HttpStatusCode.Moved);
            response.Headers.Location = new Uri(url);
            return response;
        }

        [HttpGet, Route("verifyCookie")]
        public HttpResponseMessage verifyCookie()
        {
            
            HttpContext context = HttpContext.Current;
            string SessionId = "";
            string UserId = "";
            string Username= "";
            string SubKey = "";

            CookieHeaderValue cookie = Request.Headers.GetCookies("session").FirstOrDefault();
            if (cookie != null)
            {
                CookieState cookieState = cookie["session"];
                SessionId = cookieState["SessionId"];
                UserId = cookieState["UserId"];
                Username = cookieState["Username"];
                SubKey = cookieState["SubKey"];
            }

            if (SubKey == (string)(context.Session["SubKey"]) & SessionId == (string)(context.Session["SessionId"]))
            {           
                return Request.CreateResponse(HttpStatusCode.OK, "success");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, "failed");
            }
        }

        [HttpPost, Route("AccessToken")]
        public HttpResponseMessage getAccessTokenByAuthorizationCode([FromBody]CodeObject codeObj)
        {
            TokenObjectModel tokenObj = TokenHelper.getTokenByAuthorizationCode(codeObj.code);
            if (tokenObj != null)
            {
                UserObjectModel userObj = TokenHelper.getUserByAccessToken(tokenObj.AccessToken);
                TokenObjectModel tokenUserObj = new TokenObjectModel(tokenObj.TokenId, tokenObj.AccessToken, tokenObj.RefreshToken, tokenObj.ExpiresIn, tokenObj.AuthorizationCode, userObj.UserId, userObj.Username, userObj.EmailId);
                var message = Request.CreateResponse(HttpStatusCode.Created, tokenUserObj);
                return message; ;
            }
            else
            {
                var message = Request.CreateResponse(HttpStatusCode.NotFound, "Invalid Token");
                return message;
            }
            

        }
        [HttpPost, Route("RefreshToken")]
        public HttpResponseMessage getAccessTokenByRefreshToken([FromBody]RefreshTokenObject refreshTokenObj)
        {
            UserObjectModel userObj = TokenHelper.getUserByRefreshToken(refreshTokenObj.RefreshToken);
            TokenObjectModel tokenObj = TokenHelper.createToken(userObj);
            tokenObj = TokenHelper.getTokenByAuthorizationCode(tokenObj.AuthorizationCode);
            if (userObj!=null || tokenObj!=null)
            {
                UserTokensObjectModel userTokenObj = new UserTokensObjectModel(userObj.UserId, tokenObj.TokenId);
                bool success = UserTokensHelper.MapUserToken(userTokenObj);
                TokenObjectModel  tokenUserObj= new TokenObjectModel(tokenObj.TokenId, tokenObj.AccessToken, tokenObj.RefreshToken,tokenObj.ExpiresIn, tokenObj.AuthorizationCode, userObj.UserId, userObj.Username, userObj.EmailId);
                var message = Request.CreateResponse(HttpStatusCode.Created, tokenUserObj);
                return message;
            }
            else
            {
                var message = Request.CreateResponse(HttpStatusCode.Unauthorized,"Invalid Token");
                return message;
            }        
        }
    }
}