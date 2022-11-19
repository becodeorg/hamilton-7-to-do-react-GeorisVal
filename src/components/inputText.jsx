export default function InputText() {
    let newTask
    return ( 
        <input type="text" placeholder="What needs to be done ?" className="border border-emerald-900 dark:border-white p-1 pl-2 rounded-md w-[97%] " onChange={(e => newTask = e)}></input>
        )
    }