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
    public class ChatMessage {
        public DateTime Date = DateTime.Now;
        public string Text = "";
    }
}