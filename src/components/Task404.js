import Empty from '../empty-task.svg';

export default function Task404() {
  return (
    <div className="flex flex-col justify-start sm:justify-center items-center h-[65vh] sm:h-[70vh]">
      <img src={Empty} alt="empty_task" className="w-full h-96" />
      <h1 className="sm:mt-6 text-md sm:text-xl bg-cyan-600 text-white px-6 py-2 rounded-full">
        Buat tugas pertama mu yuk!
      </h1>
    </div>
  );
}
