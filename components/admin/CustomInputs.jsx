export const Toggler = ({
  heading,
  name,
  className = "sm:col-span-2",
  toggleLabels,// array[trueLabel, falseLabel]
  status, 
  ...rest
}) => {

  return (
    <div className={className}>
        <label className="relative inline-flex flex-col cursor-pointer">
          <input
            id={name}
            name={name}
            type="checkbox"
            className="sr-only peer"
            checked={status}
            {...rest}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600 dark:peer-checked:bg-green-600"></div>
        </label>
    </div>
  );
};
