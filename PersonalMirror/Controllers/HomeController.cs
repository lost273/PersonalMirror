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
        Dictionary<string, string> userSentence = new Dictionary<string, string>();
        [HttpGet]
        public ActionResult Index() {
            return View();
        }
        [HttpPost]
        public string Index(string message) {
            string[] userWords;
            userWords = message.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            CommandMode(userWords);
            IdentifyNewWords(userWords);
            return "servermessage";
        }
        //is this message contains the new words
        public string[] IdentifyNewWords(string[] text) {
            bool isImperative = true;
            foreach (string s in text) {
                if (db.Nouns.FirstOrDefault(word => word.Name == s) != null) {
                    userSentence.Add("noun", s);
                }
                if(db.Verbs.FirstOrDefault(word => word.Name == s) != null) {
                    if (isImperative) {
                        userSentence.Add("imperative", s);
                    } else
                        userSentence.Add("verb", s);
                }
                if (db.Pronouns.FirstOrDefault(word => word.Name == s) != null) {
                    userSentence.Add("pronoun", s);
                }
                if (db.Adjectives.FirstOrDefault(word => word.Name == s) != null) {
                    userSentence.Add("adjective", s);
                }
                isImperative = false;
            }
            //MakeQueryForUser for add new words in the database
            return new string[5];
        }
        //is this conversation or command
        public void CommandMode(string[] text) {
            if (text[0].Equals("add")) {

            }
        }
        //AI behavior
        public void Behavior(string userWord, string particle) {
            
        }
    }
}