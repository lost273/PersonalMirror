using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PersonalMirror.Models {
    public abstract class Vocabulary {
        public Vocabulary(string name) {
            Name = name;
        }
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
    
    public class Word : Vocabulary {
        public Word(string name) : base(name) {
        }
        public string Description { get; set; }
        public PartOfSpeech PartOfSpeech { get; set; }
    }
    public class PartOfSpeech : Vocabulary {
        public PartOfSpeech(string name) : base(name) {
        }
    }
}