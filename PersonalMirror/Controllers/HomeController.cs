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

namespace PersonalMirror.Controllers {
    public class HomeController : Controller {
        VocabularyContext db = new VocabularyContext();
        [HttpGet]
        public ActionResult Index() {
            return View();
        }
        [HttpPost]
        public string Index(string message) {
            string[] UserWords;
            UserWords = CutIntoWords(message);
            IdentifyNewWords(message);
            IsCommand(message);
            return "servermessage";
        }
        //is this message contains the new words
        public string[] IdentifyNewWords(string text) {
            db.Adjectives.Where();
            
            return new string[5];
        }
        //is this conversation or command
        public bool IsCommand(string text) {
            return false;
        }
    }
}