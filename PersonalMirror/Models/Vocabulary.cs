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
        public string Description { get; set; }
    }
    public class Noun : Vocabulary {
        public Noun(string name) : base(name) {
        }
    }
    public class Verb : Vocabulary {
        public Verb(string name) : base(name) {
        }
    }
    public class Pronoun : Vocabulary {
        public Pronoun(string name) : base(name) {
        }
    }
    public class Adjective : Vocabulary {
        public Adjective(string name) : base(name) {
        }
    }
    public class Word {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
    public class PartOfSpeech {

    }
}