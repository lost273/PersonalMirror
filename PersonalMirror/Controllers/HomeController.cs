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
            UserWords = message.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            IdentifyNewWords(UserWords);
            IsCommand(UserWords);
            return "servermessage";
        }
        //is this message contains the new words
        public string[] IdentifyNewWords(string[] text) {
            foreach (string s in text) {
                if (db.Nouns.FirstOrDefault(word => word.Name == s) != null) {
                    Behavior(s, "noun");
                }
                if(db.Verbs.FirstOrDefault(word => word.Name == s) != null) {
                    Behavior(s, "verb");
                }
                if (db.Pronouns.FirstOrDefault(word => word.Name == s) != null) {
                    Behavior(s, "pronoun");
                }
                if (db.Adjectives.FirstOrDefault(word => word.Name == s) != null) {
                    Behavior(s, "adjective");
                }
            }
            //MakeQueryForUser for add new words in the database
            return new string[5];
        }
        //is this conversation or command
        public bool IsCommand(string text) {
            return false;
        }
        //AI behavior
        public void Behavior(string userWord, string particle) {

        }
    }
}