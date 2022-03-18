export default function TaskList({ data, editTask, handleDelete }) {
  return (
    <div className="overflow-y-auto h-3/4">
      <ul>
        {data.map((task, index) => (
          <li
            key={index}
            className="flex justify-between p-3 sm:py-3 sm:px-8 sm:items-center border-2 border-gray-100 rounded shadow-xl mb-8"
          >
            <span className="text-lg capitalize">{task}</span>
            <div className="flex gap-2 sm:gap-0">
              <button
                className="shadow px-2 text-xs sm:text-base sm:mx-1 sm:px-5 sm:py-2 text-white bg-cyan-500 rounded border-2 border-cyan-500 font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-cyan-200"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="shadow px-2 text-xs sm:text-base sm:mx-1 sm:px-5 sm:py-2 text-white bg-rose-500 rounded border-2 border-rose-500 font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-rose-200"
                onClick={() => handleDelete(index)}
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
