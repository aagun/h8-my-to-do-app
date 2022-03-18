export default function TaskInput(props) {
  const { saveTask, handleInput, taskInput, message, taskEdit, handleCancel } = props;

  return (
    <form onSubmit={saveTask} className="flex flex-col sm:flex-row sm:gap-4">
      <div>
        <input
          type="text"
          onChange={handleInput}
          value={taskInput}
          className={`w-full mb-8 rounded border-2 ${
            !message ? 'border-neutral-200' : 'border-rose-300'
          } focus:border-cyan-500 focus:shadow-none focus:ring-0`}
        />
        {message && <p className="pl-1 pt-1 text-red-400 text-[13px]">{message}</p>}
      </div>

      <div>
        {!!taskEdit ? (
          <div className="flex justify-evenly gap-3">
            <button className="w-6/12  sm:w-full text-white bg-cyan-500 py-2 px-4 rounded border-2 border-cyan-500  hover:ring-2 hover:ring-offset-2 hover:ring-cyan-200 sm:mx-1">
              Save
            </button>
            <button
              className="w-6/12 sm:w-full text-black  py-2 px-4 rounded border-2 border-neutral-500  hover:ring-2 hover:ring-offset-2 hover:ring-cyan-200 sm:mx-1"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="w-full text-white bg-cyan-500 py-2 px-4 rounded border-2 border-cyan-500 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-200">
            Tambahkan
          </button>
        )}
      </div>
    </form>
  );
}
