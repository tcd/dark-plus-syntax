using System.Collections.Generic;
using System.Linq;

namespace GitKata.Shared
{

    public class AnswerQueue<T> : Queue<T> where T : IGradable
    {
        private readonly int _size;

        public decimal Grade { get{ return !this.Any() ? 0 :  this.Average(x => x.Grade); } }

        /// <summary>
        /// Stack that cannot exceed it's size
        /// </summary>
        /// <param name="size"> Maximum size of the queue </param>
        public AnswerQueue(int size)
        {
            this._size = size;
        }

        /// <summary>
        /// Hides the default implementation of queue Enqueue
        /// </summary>
        /// <param name="item"></param>
        public new void Enqueue(T item)
        {
            if (this.Count >= _size) base.Dequeue();
            base.Enqueue(item);
        }
    }
}
