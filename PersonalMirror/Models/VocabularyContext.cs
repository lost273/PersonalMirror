using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PersonalMirror.Models {
    public class VocabularyContext : DbContext {
        public VocabularyContext() : base("DefaultConnection")  { }
        public DbSet<Noun> Nouns { get; set; }
        public DbSet<Verb> Verbs { get; set; }
        public DbSet<Pronoun> Pronouns { get; set; }
        public DbSet<Adjective> Adjectives { get; set; }
    }
}