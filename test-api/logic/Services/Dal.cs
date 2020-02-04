using logic.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace logic.Services
{
    public class Dal : IDal
    {

        public string GetAll()
        {
            return DataResolvar.GetData();
        }

        public string Update(string data)
        {
            DataResolvar.SetData(data);
            return data;
        }
        
    }
}
