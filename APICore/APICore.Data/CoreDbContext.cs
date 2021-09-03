using APICore.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace APICore.Data
{
    public class CoreDbContext : DbContext
    {
        public CoreDbContext(DbContextOptions<CoreDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Setting> Setting { get; set; }
        public DbSet<Log> Log { get; set; }
        public DbSet<UserTask> Task { get; set; }
        protected override  void OnModelCreating (ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<UserTask>()                                       
                .HasOne(b => b.User)
                .WithMany(i => i.ListTask);            
        }
    }
}