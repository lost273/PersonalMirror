/*
noun for subjects
pronoun for identify
verb for action
imperative mood for command
adjective for description
====
ST has environment - table, chair and etc.
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PersonalMirror.Models;
using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System.Security.Claims;

namespace PersonalMirror.Controllers {
    public class HomeController : Controller {
        VocabularyContext db = new VocabularyContext();
        Dictionary<string, string> userSentence = new Dictionary<string, string>();
        private ApplicationUserManager UserManager {
            get {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
        }
        private IAuthenticationManager AuthenticationManager {
            get {
                return HttpContext.GetOwinContext().Authentication;
            }
        }
        private ApplicationRoleManager RoleManager {
            get {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationRoleManager>();
            }
        }
        [HttpGet]
        public ActionResult Index() {
            return View();
        }
        [HttpPost]
        public string Index(string message) {
            string[] userWords;
            string answer = "";
            userWords = message.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            if ((UserManager.FindByName(User.Identity.Name) == null) && 
                (userWords[0].Equals("login") == false) &&
                (userWords[0].Equals("register") == false)) {
                return "Sorry, Stranger, login or register, please.";
            }
            answer = CommandMode(userWords);
            //IdentifyNewWords(userWords);
            db.SaveChanges();
            return answer;
        }
        //is this message contains the new words
        public string[] IdentifyNewWords(string[] text) {
            bool isImperative = true;
            foreach (string s in text) {
                //if (db.Nouns.FirstOrDefault(word => word.Name == s) != null) {
                //    userSentence.Add("noun", s);
                //}
                //if(db.Verbs.FirstOrDefault(word => word.Name == s) != null) {
                //    if (isImperative) {
                //        userSentence.Add("imperative", s);
                //    } else
                //        userSentence.Add("verb", s);
                //}
                //if (db.Pronouns.FirstOrDefault(word => word.Name == s) != null) {
                //    userSentence.Add("pronoun", s);
                //}
                //if (db.Adjectives.FirstOrDefault(word => word.Name == s) != null) {
                //    userSentence.Add("adjective", s);
                //}
                isImperative = false;
            }
            //MakeQueryForUser for add new words in the database
            return new string[5];
        }
        //is this conversation or command
        public string CommandMode(string[] text) {
            if (text[0].Equals("add")) {
                switch (text[1]) {
                    case "noun":
                        db.Words.Add(new Word(text[2]));
                        break;
                    case "verb":
                        db.Words.Add(new Word(text[2]));
                        break;
                    case "pronoun":
                        db.Words.Add(new Word(text[2]));
                        break;
                    case "adjective":
                        db.Words.Add(new Word(text[2]));
                        break;
                    case "part":
                        db.PartOfSpeeches.Add(new PartOfSpeech(text[2]));
                        break;
                }
            }
            if (text[0].Equals("register")) {
                RegisterModel model = new RegisterModel { UserName = text[1] , Password = text[2] , PasswordConfirm = text[3] };
                return Register(model);
            }
            if (text[0].Equals("delete")) {
                ApplicationUser user = UserManager.FindByName(User.Identity.Name);
                if (user != null) {
                    IdentityResult result = UserManager.Delete(user);
                    if (result.Succeeded) {
                        return "delete successfully";
                    }
                }
            }
            if (text[0].Equals("login")) {
                LoginModel model = new LoginModel { UserName = text[1], Password = text[2] };
                return Login(model);
            }
            if (text[0].Equals("logout")) {
                AuthenticationManager.SignOut();
                return "bye";
            }
            return "Command completed successfully";
        }
        //AI behavior
        public void Behavior(string userWord, string particle) {
            
        }
        //register the new user
        private string Register(RegisterModel model) {
            if (ModelState.IsValid) {
                ApplicationUser user = new ApplicationUser { UserName = model.UserName };
                IdentityResult result = UserManager.Create(user, model.Password);
                if (result.Succeeded) {
                    return "User registered successfully";
                }
                else {
                    foreach (string error in result.Errors) {
                        ModelState.AddModelError("", error);
                    }
                }
            }
            //unite all errors in one string
            return string.Join(",",
                    ModelState.Values.Where(E => E.Errors.Count > 0)
                    .SelectMany(E => E.Errors)
                    .Select(E => E.ErrorMessage)
                    .ToArray()); 
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public string Login(LoginModel model) {
            if (ModelState.IsValid) {
                ApplicationUser user = UserManager.Find(model.UserName, model.Password);
                if (user == null) {
                    ModelState.AddModelError("", "Неверный логин или пароль.");
                }
                else {
                    ClaimsIdentity claim = UserManager.CreateIdentity(user,
                                            DefaultAuthenticationTypes.ApplicationCookie);
                    AuthenticationManager.SignOut();
                    AuthenticationManager.SignIn(new AuthenticationProperties {
                        IsPersistent = true
                    }, claim);
                    return "welcome" + User.Identity.Name;
                }
            }
            return string.Join(",",
                    ModelState.Values.Where(E => E.Errors.Count > 0)
                    .SelectMany(E => E.Errors)
                    .Select(E => E.ErrorMessage)
                    .ToArray());
        }
    }
}