using System;
using System.Collections.Generic;

namespace PersonalMirror.Models {
    public class ChatModel {

        public List<ChatMessage> Messages;

        public ChatModel() {
            Messages = new List<ChatMessage>();

            Messages.Add(new ChatMessage() {
                Text = "Chat ON " + DateTime.Now
            });
        }
    }
    public class ChatUser {
        public string Name;
        public DateTime LoginTime;
        public DateTime LastPing;
    }

    public class ChatMessage {
        // null - server
        public ChatUser User;
        public DateTime Date = DateTime.Now;
        public string Text = "";
    }
}