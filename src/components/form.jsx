export default function Form() {
    return (
        <div>
            <input type="text" placeholder="What needs to be done ?" className="border border-emerald-900 dark:border-white p-1 pl-2 rounded-md w-[97%] " onChange={(e => newTask = e)}></input>
            <button className="bg-blue-500 text-white h-10 m-5 hover:bg-blue-800 rounded-md w-[94%]">Add task</button>
        </div>
    )
}