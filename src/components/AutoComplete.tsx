import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

import { LocationType } from 'interfaces'

interface AutoCompleteProps {
  locations: LocationType[]
  selectedLocation?: LocationType | undefined
  isHomePage?: boolean
  canUpdateFilterAutoCompleteShow?: boolean
  handleCanUpdateFilterAutoCompleteShow?: Dispatch<SetStateAction<boolean>>
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  locations,
  selectedLocation,
  isHomePage,
  canUpdateFilterAutoCompleteShow,
  handleCanUpdateFilterAutoCompleteShow
}) => {
  const [selected, setSelected] = useState(
    isHomePage
      ? {
          title: 'اكتب-المنطقه للبحث'
        }
      : undefined
  )

  const [query, setQuery] = useState('')
  const [locationsSelected, setLocationsSelected] = useState<LocationType[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputPlaceHolder, setInputPlaceHolder] = useState('')

  useEffect(() => {
    if (selected?.title) setInputPlaceHolder(selected.title)
  }, [selected])

  const removeLocation = (id: number) => {
    setLocationsSelected(
      locationsSelected.filter((location: { id: number }) => location.id !== id)
    )
  }

  const handleLocationChanged = (id: number, title: string, type: string) => {
    if (type === 'state') setLocationsSelected([{ id, title, type }])
    else {
      const isExists = locationsSelected.find(
        (location: { id: number }) => location.id === id
      )

      if (isExists) return

      const onlyCities = locationsSelected.filter(
        (location: { type: string }) => location.type === 'city'
      )
      setLocationsSelected([...onlyCities, { id, title, type }])
    }
  }

  // TODO: optimize the func
  const changeShowFilterComboboxStatus = (open: boolean) => {
    setTimeout(() => {
      // @ts-ignore
      handleCanUpdateFilterAutoCompleteShow(open)
    })
  }

  const filteredLocations =
    query === ''
      ? locations
      : locations.filter((location) =>
          location.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  useEffect(() => {
    if (selectedLocation) {
      handleLocationChanged(
        selectedLocation.id,
        selectedLocation.title,
        selectedLocation.type
      )
    }
  }, [selectedLocation])

  useEffect(() => {
    if (inputRef.current && isHomePage) {
      inputRef.current.focus()
    }
  }, [])

  const inputFocusOrBlur = (open: boolean) => {
    if (open) inputRef.current?.focus()
    else inputRef.current?.blur()
  }

  const onInputFocus = () => setIsFocused(true)
  const onInputBlur = () => setIsFocused(false)

  return (
    <div className="dir-rtl w-full relative">
      <Combobox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            {canUpdateFilterAutoCompleteShow !== undefined &&
              canUpdateFilterAutoCompleteShow !== open &&
              changeShowFilterComboboxStatus(open)}
            {!isHomePage && inputFocusOrBlur(open)}
            <div>
              <div
                className={`${
                  open || isFocused
                    ? 'border-primary border-2 '
                    : 'border-custom-gray-border'
                } ${
                  isHomePage && !locationsSelected.length
                    ? 'rounded-full md:rounded-lg'
                    : 'rounded-lg'
                } bg-white flex flex-col py-2 md:py-3 px-4 gap-2 border shadow-sm w-full h-full cursor-default overflow-hidden outline-none`}
              >
                <div className="flex items-center text-left gap-2 w-full">
                  {isHomePage && (
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="#6598CB"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                  )}
                  <Combobox.Button className="w-full h-full">
                    <Combobox.Input
                      ref={inputRef}
                      id="location"
                      className={`${
                        !isHomePage && 'placeholder-black'
                      } peer w-full h-full text-base leading-5 text-black outline-none`}
                      placeholder={`${
                        isHomePage ? 'اكتب المنطقه للبحث' : inputPlaceHolder
                      }`}
                      onChange={(event) => setQuery(event.target.value)}
                      onFocus={onInputFocus}
                      onBlur={onInputBlur}
                    />
                    {!isHomePage && (
                      <label
                        htmlFor="location"
                        className={`${
                          open ? 'text-primary' : 'text-custom-gray'
                        } ${
                          inputPlaceHolder !== '' || open
                            ? '-top-2 px-1 right-3 text-xs'
                            : 'top-3 md:top-4 right-4'
                        } absolute cursor-text duration-300 z-10 bg-white`}
                      >
                        المنطقه
                      </label>
                    )}
                  </Combobox.Button>
                  <Combobox.Button
                    className="flex items-center"
                    type="submit"
                    aria-label="dropdown"
                  >
                    {open ? (
                      <ChevronUpIcon
                        className="h-7 w-7 text-custom-gray"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDownIcon
                        className="h-7 w-7 text-custom-gray"
                        aria-hidden="true"
                      />
                    )}
                  </Combobox.Button>
                </div>
                <div
                  className={`${
                    locationsSelected.length && isHomePage
                      ? 'my-1'
                      : 'm-0 hidden'
                  } flex flex-wrap justify-start`}
                >
                  {isHomePage &&
                    locationsSelected.map((location: LocationType) => (
                      <div
                        key={location.id}
                        className="rounded-lg mt-2 ml-2 py-1 px-2 text-white bg-[#6598CB] text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease"
                      >
                        {location.title}
                        <button
                          type="submit"
                          className="bg-transparent hover focus:outline-none"
                          onClick={() => removeLocation(location.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 ml-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-in duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options
                  className={`${
                    isHomePage && 'hidden md:block'
                  } z-20 bg-white absolute p-2 overflow-y-scroll mt-3 left-0 max-h-80 w-full rounded-lg text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                >
                  {filteredLocations.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-custom-gray">
                      لا توجد منطقه بهذا الاسم
                    </div>
                  ) : (
                    <>
                      {isHomePage && (
                        <Combobox.Option
                          className="relative cursor-default select-none rounded-lg"
                          value="all"
                        >
                          <span className="block text-base truncate hover:bg-primary-lighter text-black font-DroidArabicKufiBold p-2 cursor-pointer">
                            {' '}
                            كل مناطق الكويت
                          </span>
                        </Combobox.Option>
                      )}
                      {filteredLocations.map((location) => (
                        <Combobox.Option
                          key={location.id}
                          className="relative cursor-default select-none"
                          value={
                            isHomePage || location.type === 'city'
                              ? location
                              : undefined
                          }
                          onClick={() =>
                            handleLocationChanged(
                              location.id,
                              location.title,
                              location.type
                            )
                          }
                        >
                          {isHomePage && location.type === 'city' && (
                            <span className="absolute top-3 left-5 text-primary">
                              ({location.count})
                            </span>
                          )}
                          <span
                            className={`${
                              location.type === 'state' &&
                              !isHomePage &&
                              'hidden'
                            } ${location.type === 'state' && 'text-black'} ${
                              location.type === 'city' && 'text-primary'
                            } hover:bg-primary-lighter font-DroidArabicKufiBold text-base block truncate p-2 cursor-pointer`}
                          >
                            {location.title}
                          </span>
                        </Combobox.Option>
                      ))}
                    </>
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </>
        )}
      </Combobox>
    </div>
  )
}

export default AutoComplete
