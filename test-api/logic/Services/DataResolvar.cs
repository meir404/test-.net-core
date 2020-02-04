using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace logic.Services
{
    public static class DataResolvar
    {
        private static readonly string path = Directory.GetParent(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.FullName + "/data.json";
        public static void SetData(string data)
        {
            File.WriteAllText(path, data);
        }
        public static string GetData()
        {
            return File.ReadAllText(path);
        }
    }
}
