import React from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

const WorkintechTaskHookForm = ({ kisiler, submitFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      people: [],
    },
    mode: 'onChange',
  });

  // task ekleme
  function doSubmit(formData) {
    submitFn({
      ...formData,
      id: nanoid(5),
      status: 'yapılacak',
    });
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit(doSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          type="text"
          {...register('title', {
            required: 'Task başlığı yazmalısınız',
            minLength: {
              value: 3,
              message: 'Task başlığı en az 3 karakter olmalı',
            },
          })}
        />
        <p className="input-error">{errors?.title?.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          {...register('description', {
            required: 'Task açıklaması yazmalısınız',
            minLength: {
              value: 10,
              message: 'Task açıklaması en az 10 karakter olmalı',
            },
          })}
        ></textarea>
        <p className="input-error">{errors?.description?.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p, index) => (
            <label className="input-checkbox" key={index}>
              <input
                type="checkbox"
                {...register('people', {
                  validate: (arr) => {
                    if (arr.length > 3) {
                      return 'En fazla 3 kişi seçebilirsiniz';
                    } else if (arr.length === 0) {
                      return 'Lütfen en az 1 kişi seçin';
                    }
                    return true;
                  },
                })}
              />
              {p}
            </label>
          ))}
        </div>
        <p className="input-error">{errors?.people?.message}</p>
      </div>

      <div className="form-line">
        <button className="submit-button" type="submit" disabled={!isValid}>
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default WorkintechTaskHookForm;